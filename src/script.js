
var app = angular.module('app', []);

var results = {};

app.controller('mainCtrl', ['$scope', function(s) {
	s.results = results;
	s.evalClassName = function(m) {
		if(m > 1 && m <= 1.2) return 'low';
		else if (m > 1.2 && m <= 1.5) return 'medium';
		else if (m > 1.5 && m <= 10) return 'high';
	};
}]);

app.run(['$http', function(http) {
	http({
		method: 'GET',
		url: 'http://localhost:8080/webdriver/app3/results.json'
	}).then(function(data) {
		results.data = data.data;
		// console.log(data);
	});
}]);

app.filter('groupByFramework_nonk', function() {//grouping by framework non-keyed and returning  predefined order
	var res = [];
	
	return function(arr) {
		if(arr === undefined)
			return [];
		var cats = {};
		var name;
		for(var i = 0; i < arr.length; i++) {
			var item = arr[i];
			if(item.keyed || item.summary) //only non-keyed results
				continue;
			name = item['framework'];
			if(!cats.hasOwnProperty(name)) {
				cats[name] = [item];
				cats[name].sort_index = item.framework_index;
			} else {
				cats[name].push(item);
			}
		}
		
		var tmp = [];
		for(var prop in cats) {
			var sort_index = cats[prop].sort_index;
			delete cats[prop].sort_index;
			tmp.push({
				key: prop,
				value: cats[prop],
				sort_index: sort_index,
			});
		}
		tmp.sort((a,b) => {return a.sort_index > b.sort_index;})

		if(!angular.equals(tmp, res[0]) ) {
			res[0] = tmp;
		}

		return res[0];
		// return tmp;
	};
});

app.filter('groupByBenchmark_nonk', function() {//grouping by benchmark non-keyed and returning  predefined order
	var res = [];
	
	return function(arr) {
		if(arr === undefined)
			return [];
		var cats = {};
		var name;
		for(var i = 0; i < arr.length; i++) {
			var item = arr[i];
			if(item.keyed || item.summary) //only non-keyed results
				continue;
			name = item['benchmark'];
			if(!cats.hasOwnProperty(name)) {
				cats[name] = [item];
				cats[name].sort_index = item.benchmark_index;
			} else {
				cats[name].push(item);
			}
		}
		
		var tmp = [];
		for(var prop in cats) {
			var sort_index = cats[prop].sort_index;
			delete cats[prop].sort_index;
			tmp.push({
				key: prop,
				value: cats[prop],
				sort_index: sort_index,
			});
		}
		tmp.sort((a,b) => {return a.sort_index > b.sort_index;})

		if(!angular.equals(tmp, res[0]) ) {
			res[0] = tmp;
		}

		return res[0];
	};
});

app.filter('groupByFramework_keyed', function() {//grouping by framework keyed and returning  predefined order
	var res = [];
	
	return function(arr) {
		if(arr === undefined)
			return [];
		var cats = {};
		var name;
		for(var i = 0; i < arr.length; i++) {
			var item = arr[i];
			if(!item.keyed || item.summary) //only keyed results
				continue;
			name = item['framework'];
			if(!cats.hasOwnProperty(name)) {
				cats[name] = [item];
				cats[name].sort_index = item.framework_index;
			} else {
				cats[name].push(item);
			}
		}
		
		var tmp = [];
		for(var prop in cats) {
			var sort_index = cats[prop].sort_index;
			delete cats[prop].sort_index;
			tmp.push({
				key: prop,
				value: cats[prop],
				sort_index: sort_index,
			});
		}
		tmp.sort((a,b) => {return a.sort_index > b.sort_index;})

		if(!angular.equals(tmp, res[0]) ) {
			res[0] = tmp;
		}

		return res[0];
	};
});

app.filter('groupByBenchmark_keyed', function() {//grouping by benchmark keyed and returning  predefined order
	var res = [];
	
	return function(arr) {
		if(arr === undefined)
			return [];
		var cats = {};
		var name;
		for(var i = 0; i < arr.length; i++) {
			var item = arr[i];
			if(!item.keyed || item.summary) //only keyed results
				continue;
			name = item['benchmark'];
			if(!cats.hasOwnProperty(name)) {
				cats[name] = [item];
				cats[name].sort_index = item.benchmark_index;
			} else {
				cats[name].push(item);
			}
		}
		
		var tmp = [];
		for(var prop in cats) {
			var sort_index = cats[prop].sort_index;
			delete cats[prop].sort_index;
			tmp.push({
				key: prop,
				value: cats[prop],
				sort_index: sort_index,
			});
		}
		tmp.sort((a,b) => {return a.sort_index > b.sort_index;})

		if(!angular.equals(tmp, res[0]) ) {
			res[0] = tmp;
		}

		return res[0];
	};
});

