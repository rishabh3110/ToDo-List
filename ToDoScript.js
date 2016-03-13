(function(){

	var actionBtns = $(".action-btn"),
	 deleteBtn = actionBtns.find(".delete"),
	 addNewTask = actionBtns.find(".add"),
	 taskList = $(".list"),
	 inputField = taskList.find(".new").find(".inpt"),

	 appendTask = function() {
		var inputValue = $(".inpt").val(),
		jNewTask;

		if( !inputValue ) {
			return;
		}

		jNewTask = $("<div class='old-task'><div class='tick'><div class='unchecked-btn'><img src='unchecked.png' style='width: 34px;'></div></div><div class='old-note'><div class='tasks'>"+ inputValue +"</div></div></div>");
		taskList.find(".old").append( jNewTask );

		jNewTask.click(function() {
			selectTask(jNewTask);
		});

		deleteBtn.click(function() {
			deleteTask(jNewTask);
		});
		inputField.val('');
	},

	 selectTask = function(jNewTask) {

		var tick = jNewTask.find(".tick");
		var uncheckedBtn = tick.find(".unchecked-btn");

		if(uncheckedBtn.length) {
			uncheckedBtn.replaceWith($("<div class='checked-btn'><img src='checked.png' style='height: 34px;'></div>"));
			tick.addClass('check');
		}

		else if( !jNewTask.find(".old-note .tasks").hasClass('completed')) {
			jNewTask.find(".checked-btn").replaceWith($("<div class='unchecked-btn'><img src='unchecked.png' style='width: 34px;'></div>"));
			if ( tick.hasClass('check') ) {
				tick.removeClass('check');
			}
		}
	},

	 deleteTask = function(jNewTask) {
		if(jNewTask.find(".checked-btn").length) {
			jNewTask.find(".old-note").find(".tasks").addClass('completed');
		}
	};

	addNewTask.click( function() {
		appendTask();
	});

	inputField.on('focus', function() {
		inputField.addClass('clicked');
	});

	inputField.on('keypress', function(e) {
    	if(e.keyCode === 13){
    		appendTask();
    	}
	});
})();