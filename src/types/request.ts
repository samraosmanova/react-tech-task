import { CreditForm } from './creditInfo';
import { UserInfoForm } from './userInfo';
import { Payment } from './patment';
import { UserSchema } from './user';

export interface Request {
	calculation: Payment[];
	userInfo: UserInfoForm;
	creditInfo: CreditForm;
	guarantorLists: UserSchema[];
}

export interface Credits extends Request {
	credits: Request[];
	allGuarantors: UserSchema[][];
}
