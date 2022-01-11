import { configureStore } from '@reduxjs/toolkit';

import users from './slices/users';
import crudSlicer from './slices/crudSlicer';

export default configureStore({
    reducer: {
        users,
        crudSlicer,
    }
});