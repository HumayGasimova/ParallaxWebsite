import { 
    createSelector 
} from 'reselect';

const getMenuButtonIsPressed = (state) => state.home.menuButtonIsPressed;

export const getMenuButtonIsPressedState = createSelector(
    [getMenuButtonIsPressed],
    (x) => x
);

const getSidebarOnInit = (state) => state.home.sidebarOnInit;

export const getSidebarOnInitState = createSelector(
    [getSidebarOnInit],
    (x) => x
);

const getServices = (state) => state.home.services;

export const getServicesState = createSelector(
    [getServices],
    (x) => x
);

const getMembers = (state) => state.home.members;

export const getMembersState = createSelector(
    [getMembers],
    (x) => x
);

const getImages = (state) => state.home.images;

export const getImagesState = createSelector(
    [getImages],
    (x) => x
);

const getFeedback = (state) => state.home.feedback;

export const getFeedbackState = createSelector(
    [getFeedback],
    (x) => x
);

const getDots = (state) => state.home.dots;

export const getDotsState = createSelector(
    [getDots],
    (x) => x
);

const getActivatedIcon = (state) => state.home.activatedIcon;

export const getActivatedIconState = createSelector(
    [getActivatedIcon],
    (x) => x
);

const getImageIsEnlarged = (state) => state.home.imageIsEnlarged;

export const getImageIsEnlargedState = createSelector(
    [getImageIsEnlarged],
    (x) => x
);

const getImageId = (state) => state.home.imageId;

export const getImageIdState = createSelector(
    [getImageId],
    (x) => x
);

const getDisableOnNext = (state) => state.home.disableOnNext;

export const getDisableOnNextState = createSelector(
    [getDisableOnNext],
    (x) => x
);

const getDisableOnPrevious = (state) => state.home.disableOnPrevious;

export const getDisableOnPreviousState = createSelector(
    [getDisableOnPrevious],
    (x) => x
);
