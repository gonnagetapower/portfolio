import { FC } from "react";
import { ROUTE_CONSTANTS } from "@shared/index.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "@pages/index.tsx";


export const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTE_CONSTANTS.HOME} element={<LandingPage />} />
        </Routes>
    </BrowserRouter>
);