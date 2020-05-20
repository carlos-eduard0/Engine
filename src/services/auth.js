import Cookies from 'universal-cookie'; 

const cookies = new Cookies();

class Auth{
	constructor(){
		this.user = '';
	}

	check_auth(){
		this.user = cookies.get('id');

		if(!this.user){ 
			return false;
		} else {
			return true;
		}
	}
}

export default new Auth();