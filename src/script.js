
var app = angular.module('app', []);

var results = {};

app.controller('mainCtrl', ['$scope', function(s) {
	s.results = results;
	s.flags = {};
	s.flags.showDetailedKeyed = false;
	s.flags.showGeneralKeyed = false;
	s.flags.showMemoryKeyed = false;
	s.flags.showKeyed = true;

	s.flags.showDetailedNonk = false;
	s.flags.showGeneralNonk = false;
	s.flags.showMemoryNonk = false;
	s.flags.showNonk = true;

}]);

app.run(['$http', function(http) {
	http({
		method: 'GET',
		url: './results.json'
	}).then(function(data) {
		results.data = data.data;
		// console.log(data);
	});
}]);



app.filter('groupByFramework_keyed', function() {//grouping traces by framework keyed and returning  predefined order
	var res = [];
	
	return function(arr, keyedFlag, n) {
		if(arr === undefined)
			return [];
		var cats = {};
		if(n === undefined) {
			n = 0;
		}
		if(keyedFlag === undefined) {
			keyedFlag = true;
		}
		var name;
		for(var i = 0; i < arr.length; i++) {
			var item = arr[i];
			if(item.summary) 
				continue;
			if(keyedFlag && !item.keyed)
				continue;
			if(!keyedFlag && item.keyed)
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
		// tmp.sort((a,b) => {return a.sort_index > b.sort_index;})

		if(!angular.equals(tmp, res[n]) ) {
			res[n] = tmp;
		}

		return res[n];
	};
});

app.filter('groupByBenchmark_keyed', function() {//grouping by benchmark keyed and returning  predefined order
	var res = [];
	
	return function(arr, keyedFlag, n, memFlag) {
		if(arr === undefined)
			return [];
		var cats = {};
		if(n === undefined) {
			n = 0;
		}
		var name, bench_descr;
		for(var i = 0; i < arr.length; i++) {
			var item = arr[i];
			if(item.summary  ) //only keyed results
				continue;
			if(keyedFlag && !item.keyed)
				continue;
			if(!keyedFlag && item.keyed)
				continue;
			if(memFlag && item.type === 'CPU')
				continue;
			if(!memFlag && item.type === 'MEM')
				continue;

			name = item['benchmark'];
			bench_descr = item['bench_descr'];
			if(!cats.hasOwnProperty(name)) {
				cats[name] = [item];
				cats[name].sort_index = item.benchmark_index;
				cats[name].bench_descr = bench_descr;
			} else {
				cats[name].push(item);
			}
		}
		
		var tmp = [];
		for(var prop in cats) {
			var sort_index = cats[prop].sort_index;
			var d = cats[prop].bench_descr;
			delete cats[prop].sort_index;
			delete cats[prop].descr;
			tmp.push({
				key: prop,
				bench_descr: d,
				value: cats[prop],
				sort_index: sort_index,
			});
		}
		// tmp.sort((a,b) => {return a.sort_index > b.sort_index;})

		if(!angular.equals(tmp, res[n]) ) {
			res[n] = tmp;
		}

		return res[n];
	};
});

app.filter('getSummaries_keyed', function() {//getting summaries for keyed results
	var res = [];
	
	return function(arr, keyedFlag, n, memFlag) {
		if(arr === undefined)
			return [];
		var cats = {};
		var name;
		for(var i = 0; i < arr.length; i++) {
			var item = arr[i];
			if(!item.summary) //only keyed summaries
				continue;
			if(keyedFlag && !item.keyed)
				continue;
			if(!keyedFlag && item.keyed)
				continue;
			if(memFlag && item.category !== 'memory')
				continue;
			if(!memFlag && item.category === 'memory')
				continue;
			
			name = item['category'];
			if(!cats.hasOwnProperty(name)) {
				cats[name] = [item];
				cats[name].sort_index = item.category_index;
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
		// tmp.sort((a,b) => {return a.sort_index > b.sort_index;})

		if(!angular.equals(tmp, res[n]) ) {
			res[n] = tmp;
		}

		return res[n];
	};
});



