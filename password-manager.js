console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts', [{
	username: 'Asreet',
	balance: 100
},{
	username: 'Mydata',
	balance:  1000
}]);

var accounts=storage.getItemSync('accounts');
//push on a new accounts
accounts.push({
	username: 'Jen',
	balance: 75
		});

//save using setItemSync
storage.setItemSync('accounts', accounts);

console.log(accounts);