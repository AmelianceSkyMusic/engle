import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { TRootState } from '../reducers/rootReducer';

export const useTypedDispatch:
() => ThunkDispatch<TRootState, unknown, AnyAction> = useDispatch;
