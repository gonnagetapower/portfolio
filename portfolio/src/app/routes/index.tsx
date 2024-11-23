import { FC } from "react";
import { ROUTE_CONSTANTS } from "@shared/index.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IntroPage, Profile, Projects } from "@pages/index.tsx";
import MainLayout from "src/layouts/MainLayout";


export const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path={ROUTE_CONSTANTS.HOME} element={<IntroPage />} />
                <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile />} />
                <Route path={ROUTE_CONSTANTS.PROJECTS} element={<Projects />} />
            </Route>
        </Routes>
    </BrowserRouter>
);