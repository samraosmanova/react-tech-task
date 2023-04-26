import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { CreditsPage, GuarantorsPage, HomePage, UserPage } from './pages';
import { SignInForm, SignUpForm } from './Forms';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<HomePage />}>
			<Route index element={<SignInForm />} />
			<Route path="/:id" element={<UserPage />} />
			<Route path="/signup" element={<SignUpForm />} />
			<Route path="/credits" element={<CreditsPage />} />
			<Route path="/guarantors" element={<GuarantorsPage />} />
		</Route>
	)
);
