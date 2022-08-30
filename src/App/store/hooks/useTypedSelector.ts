import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from '../reducers/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
