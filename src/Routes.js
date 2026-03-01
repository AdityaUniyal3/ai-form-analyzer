import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NotesPage } from './pages/NotesPage';
import { NoteDetailPage } from './pages/NoteDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <NotesPage/>
                </Route>
                <Route>
                    <NoteDetailPage/>
                </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}