$(document).ready(function(){

	function ShoppingListApp() {
		this.list = new List();
		this.inputView = new InputView();
		this.listView = new ListView();

		for (var i = 0; i < this.list.listItems.length; i++) {
			this.listView.addListItem(this.list.listItems[i]);
		}
	}

	ShoppingListApp.prototype.addListItem = function(value) {
		this.listView.addListItem(value);
		this.list.addListItem(value);
	};
	
	ShoppingListApp.prototype.removeListItem = function(index) {
		this.list.removeListItem(index);
	};

	function List() {
		this.listItems = [];
		this.load();
	}

	List.prototype.addListItem = function(value) {
		this.listItems.push(value);
		this.save();
	};

	List.prototype.removeListItem = function(index) {
		this.listItems.splice(index, 1);
		this.save();
	};

	List.prototype.save = function() {
		localStorage.setItem('shoppingList', JSON.stringify(this.listItems));
	}

	List.prototype.load = function() {
		var listItems = localStorage.getItem('shoppingList');
		if (listItems) {
			this.listItems = JSON.parse(listItems);
			console.log(this.listItems);
		}
	};

	function InputView() {
		this.element = $('.add-box');
		this.button = this.element.find('button');
		this.input = this.element.find('input');
		this.validationMessage = this.element.find('.validation');

		this.button.click(this.validateInput.bind(this));
	}

	
	InputView.prototype.validateInput = function() {
		var inputVal = $('.lined-box-first .todo-item > input').val();

		if (inputVal == "") {
			this.validationMessage.text("please enter some text!");
		} else {
			this.validationMessage.css('display', 'none');
		}

		app.addListItem(inputVal);
	}


	//----------------------------------
	
	function ListView() {
		this.element = $('.shopping-list');

		this.element.on('click', 'input', this.checkListItem.bind(this));
		this.element.on('click', '.button-error', this.removeListItem.bind(this));
	}

	ListView.prototype.addListItem = function(value) {
		$('li.template')
			.clone()
			.appendTo('body ul')
			.removeClass('template')
			.find('span').text( value);
	};

	//cross out the text of items with the checkbox selected
	
	ListView.prototype.checkListItem = function(event) {
		$( event.target ).closest('li').find('div.lined-box div.todo-item span').toggleClass('has-line');
	};

	//REMOVE TO DO ITEM
	
	ListView.prototype.removeListItem = function(event) {
		$( event.target ).closest('li.line-item').slideUp(function () {
			var itemIndex = $( this ).index() - 1;
			app.removeListItem(itemIndex);
			$( this ).remove();
		});
	};
	
	var app = new ShoppingListApp();
});
