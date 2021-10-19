import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getContributors from "../api/getContributors";
import getUser from "../api/getUser";

const initialState = { data: [], sort_method: "contributions" };

export const load = createAsyncThunk(
  "contributors/load",
  async (
    repoDetails = { company: "angular", repo: "angular" },
    { dispatch }
  ) => {
    const { company, repo } = repoDetails;
    let res = await getContributors(company, repo);

    return res;
  },
  (dispatch, result) => {
    dispatch(loadUserInfo());
  }
);

export const loadUserInfo = createAsyncThunk(
  "contributors/loadUsers",
  async (_, { getState, dispatch }) => {
    const contributors = [...getState().contributors.data];

    for (let i = 0; i < contributors.length; i++) {
      const currentLogin = contributors[i].login;
      const user = await getUser(currentLogin);
      contributors[i] = { ...contributors[i], ...user };
      contributors[i].gists_repos =
        contributors[i].public_gists + contributors[i].public_repos;

      dispatch(
        updateContributor({
          username: currentLogin,
          key: "followers",
          value: user.followers,
        })
      );

      dispatch(
        updateContributor({
          username: currentLogin,
          key: "gists_repos",
          value: user.public_gists + user.public_repos,
        })
      );

      dispatch(sortContributors());
    }

    return contributors;
  }
);

export const sortContributors = createAsyncThunk(
  "contributors/sort",
  async (_, { getState }) => {
    const contributors = [...getState().contributors.data];
    const sortMethod = getState().contributors.sort_method;
    return contributors.sort((a, b) => b[sortMethod] - a[sortMethod]);
  }
);

export const contributorsSlice = createSlice({
  name: "contributors",
  initialState,
  reducers: {
    setContributors: (state, action) => (state.data = action.payload),
    updateContributor: (state, { payload }) => {
      const { username, key, value } = payload;
      const contributor = state.data.find(({ login }) => login === username);

      contributor[key] = value;
    },
    setSortMethod: (state, { payload }) => {
      state.sort_method = payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(load.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(sortContributors.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(loadUserInfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setContributors, updateContributor, setSortMethod } =
  contributorsSlice.actions;

export default contributorsSlice.reducer;
