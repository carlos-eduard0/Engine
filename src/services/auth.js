import Cookies from 'universal-cookie'; 

const cookies = new Cookies();

class Auth{
	constructor(){
		this.authenticated = false;
		this.user = '';
	}

	check_auth(){
		this.user = cookies.get('id');

		if(!this.user){ 
			this.authenticated = false;
		} else {
			this.authenticated = true;
		}
	}
}

export default new Auth();