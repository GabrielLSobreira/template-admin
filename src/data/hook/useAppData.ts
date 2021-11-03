import { useContext } from 'react';
import AppContext from '../content/AppContext';

const useAppData = () => useContext(AppContext);

export default useAppData;
