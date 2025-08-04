import { createSlice } from "@reduxjs/toolkit";

const initUserState = {
  isModal: {},
  isLogin: false,
  isLogout: false,
  isPwModal: false,
  isEdit: false,
  essentialState: [],
  selectState: [],
  siteDatas: [],
};

const accountSlice = createSlice({
  name: "account",
  initUserState,
  reducers: {
    /*삭제 예정*/
    isLoggedIn: (state, { payload }) => {
      state.isLogin = true;
    },
    onSetSiteDatas: (state, { payload }) => {
      state.siteDatas = payload;
    },
    onSetInviteCode: (state, { payload }) => {
      return (state = { ...state, ...payload });
    },
    onSetAgreeHistory: (state, { payload }) => {
      state.essentialState = payload[0];
      state.selectState = payload[1];
    },

    onHideAccountToast: (state, { payload }) => {
      state.isToast = false;
    },

    ////
    onChangeAccountUserState: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
    onToggleAccountUserEdit: (state) => {
      state.isEdit = !state.isEdit;
    },
    onToggleAccountUserModal: (state, { payload }) => {
      state.isModal[payload] = !state.isModal[payload];
    },
    onToggleAccountLogout: (state) => {
      state.isLogout = !state.isLogout;
    },
    onToggleAccountPwModal: (state) => {
      state.isPwModal = !state.isPwModal;
    },
  },
});

export const {
  onToggleAccountLogout,
  onToggleAccountPwModal,
  onChangeAccountUserState,
  onToggleAccountUserModal,
  onToggleAccountUserEdit,

  //
  onShowAccountToast,
  onHideAccountToast,
  onSetAgreeHistory,
  onSetInviteCode,
  onSetSiteDatas,
  isLoggedIn,
} = accountSlice.actions;

export default accountSlice;
