import { useState, useCallback, Dispatch, SetStateAction } from 'react';

type StateSetter<T> = Dispatch<SetStateAction<T>>;

function useMergeState<T>(
  initialState: T | (() => T)
): [T, (newState: Partial<T> | ((prevState: T) => Partial<T>)) => void, StateSetter<T>] {
  const [state, setState] = useState<T>(initialState);

  const mergeState = useCallback(
    (newState: Partial<T> | ((prevState: T) => Partial<T>)) => {
      setState((currentState) => {
        const updatedState =
          typeof newState === 'function' ? newState(currentState) : newState;
        return { ...currentState, ...updatedState };
      });
    },
    []
  );

  return [state, mergeState, setState];
}

export default useMergeState;
