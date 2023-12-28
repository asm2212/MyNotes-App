import {Route,Routes} from 'react-router-dom';
import Homepage from '../pages/Homepage';

export default function AllRoutes(){
    return<Routes>
        <Route path='/' element={<Homepage />}></Route>
    </Routes>
}