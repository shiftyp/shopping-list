$(document).ready(function(){
	 //input validation
	
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

		listView.addListItem(inputVal);
	}

	var inputView = new InputView();

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
			$( this ).remove();
		});
	};

	var listView = new ListView();
});
