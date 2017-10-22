var searchWords1 = document.getElementsByClassName('caption');
var addedFiles1 = document.getElementsByClassName('all-data-files');
var searchBar = document.getElementsByClassName('search-bar');


searchBar[0].addEventListener('input', function(event) {
	event.preventDefault();

	var value = searchBar[0].value;
	var valueLength = value.length;
	var array = []
	var array2 = [];
	var filteredArray = [];
	var searchArray = [];
	var joined;

	for (var i = 0; i < addedFiles1.length; i++) {
		addedFiles1[i].className = 'all-data-files realitive delete thumbnail hide';
		array.push(searchWords1[i].childNodes[1].firstChild.textContent);
		console.log(array);
	}

	
	for (var i = 0; i < value.length; i++) {
		for (var x = 0; x < array.length; x++) {
			for (var j in array[x]) {

				if (value.charAt(i) === array[x][i]) {
					array2.push(array[x][i]);
		
					filteredArray = array2.filter(function(item, pos, self) {
						return self.indexOf(item) == pos;
					});
				} 
			}
		}
		
		if (filteredArray.length > 0) {
			searchArray.push(filteredArray[0]);
			joined = searchArray.join('');
			
			for (var q = 0; q < addedFiles1.length; q++) {
				console.log(addedFiles1.length);
				if (searchWords1[q].childNodes[1].firstChild.textContent.startsWith(joined)) {
					addedFiles1[q].className = 'all-data-files realitive delete thumbnail';
				} else {
					addedFiles1[q].className = 'all-data-files realitive delete thumbnail hide';
				}
			}
		}

		filteredArray = [];
		array2 = [];
	}

	if (value.length === 0) {
		for (var i = 0; i < addedFiles1.length; i++) {
			addedFiles1[i].className = 'all-data-files realitive delete thumbnail';
		}

	}	
});

$(document).ready(function() {
	var numLikes = $('.num-likes');
	var thumbsUp = $('.thumbsup');
	var dataFiles = $('.all-data-files');
	var trashCan = $('.glyphicon-trash');
	var lockOverview = $('.glyphicon-lock');
	var overviewIcons = $('.overview-icons');
	var thumbsIcon = $('.fa-thumbs-o-up');
	var lockIcon = $('.lock-icon');
	var itemsSelected4Delete = $('#items-selected');
	var itemsCounter = $('.counter');
	var deleteBtn = $('.delete-btn');
	var upload = $('.uploaded');
	var recentlyAdded = $('.recently-added');
	var liked = $('.likedCount');
	var favorites = $('.favorites');
	var deletedCount = $('.deleted');
	var imageFiles = $('.image-files');
	var audioFiles = $('.audio-files');
	var videoFiles = $('.video-files');
	var totalFiles = $('.total-files');
	var overviewLock = $('.glyphicon-lock');
	var lockFiles = $('.lock-files');
	var addFolder = $('.add-folder');
	var totalCountOfFiles = 0;
	var trashCanReady = false;
	var endAllEvents = true;
	var insideRowLength = 0;
	var number = 0;
	var count = 0;
	var totalNuMOfLikes = 0;
	var totalNuMOfDeletes = 0;
	var totalNumOfFavorites = 0;
	var overviewDropDownCurrent;
	var messageError = document.getElementById('message-error');
	var messageSuccess = document.getElementById('message-success');
	var fileName = document.getElementsByClassName('file-name');
	var fileSize = document.getElementsByClassName('file-size');
	var navbarButton  = $('.locks');
	var unlock = $('.unlock');
	var lock = $('.lock');
	var icons = $('.main-nav');
	var navbar = $('.close-nav');
	var nav = $('nav');
	var greenBox = $('.green-box');
	var overviewDropDown = $('.dropdown-menu-main');
	var switchButton = $('.switch');
	var switchCircle = $('.switch-circle');
	var switchBtn = $('.switch-btn');
	var gallery = $('.gallery');
	var navIcons = $('.nav-icons a');
	var filterIcons = $('.nav-icons-filter a');
	var childFilterIcons = $('.nav-icons-filter p');
	var containers = $('.content-containers');
	var searchWords = $('.content-containers p');
	var dataFiles = $('.all-data-files');
	var downloads = $('.downloads');
	var download = $('.download a');
	var newFolder = $('.new-folder');
	var newButton = $('.new');
	var imageBadge = $('.image-badge');
	var audioBadge = $('.audio-badge');
	var videoBadge = $('.video-badge');
	var totalBadge = $('.total-badge');
	var downloadsCount = 0;
	var filesCount = 0;
	var section = $('.section').outerHeight();
	var windowWidth = window.innerWidth;
	menusAndNavagation();
	folders();

	function deleteBadges (eventClicked) {
	
		var parentContainer1 = eventClicked.parent().parent().parent().parent().parent();
		var parentContainer2 = eventClicked.parent().parent().parent().parent();

		if (parentContainer1.hasClass('images')) {
			var imageBadgeNum = imageBadge.text();
			var totalBadgeNum = totalBadge.text();
			imageBadge.text(Number(imageBadgeNum) - 1);
 			totalBadge.text(Number(totalBadgeNum) - 1);

 			if (imageBadge.text() === '0') {
 				imageBadge.hide();
 			}

		} else if (parentContainer2.hasClass('audio')) {
			var audioBadgeNum = audioBadge.text();
			var totalBadgeNum = totalBadge.text();
			audioBadge.text(Number(audioBadgeNum) - 1);
 			totalBadge.text(Number(totalBadgeNum) - 1);

 			if (audioBadge.text() === '0') {
 				audioBadge.hide();
 			}

		} else {
			var videoBadgeNum = videoBadge.text();
			var totalBadgeNum = totalBadge.text();
			videoBadge.text(Number(videoBadgeNum) - 1);
 			totalBadge.text(Number(totalBadgeNum) - 1);

 			if (videoBadge.text() === '0') {
 				videoBadge.hide();
 			}
	
		}

		/*if (totalBadge.text() === '0') {
			totalBadge.hide();
		}*/

	}

	$(document).on('click', '.new', function() {
		eventClicked = $(this);
		$(this).hide();

		deleteBadges(eventClicked);
		
	});
	

	
	newFolder.on('submit', function(e) {
		e.preventDefault();
		var userInput = $('.new-folder input').val();
		icons.eq(1).append('<div class="nav-icons-filter">' +
								'<a href="#" class="active-nav-icon-filter"><span class="glyphicon fa fa-folder-o fa-lg" aria-hidden="true"></span><p>' + userInput +'</p></a>' +
							'</div>');
		$('.new-folder input').val('');
	});	


	dataFiles.on('click', function() {
		var clickFileLock = $('.click-file-lock');
		var filesLocked = $('.files-locked');
		
		if(lockIcon.hasClass('active-overview-icon')) {
			$(this).toggleClass('lock-red');
		
			 if ($(this).hasClass('lock-red')) {
			 	filesCount++;
				filesLocked.text(filesCount);
			} else {
				filesCount--;
				filesLocked.text(filesCount);
			}
		}
	});

	function imageBadges() {
		var imageBadgeNum = imageBadge.text();
		var totalBadgeNum = totalBadge.text();
 		imageBadge.show();
		imageBadge.text(Number(imageBadgeNum) + 1);
 		totalBadge.text(Number(totalBadgeNum) + 1);
 		
	}

	function audioBadges() {
		var totalBadgeNum = totalBadge.text();
		var audioBadgeNum = audioBadge.text();
		audioBadge.show();
		audioBadge.text(Number(audioBadgeNum) + 1);
 		totalBadge.text(Number(totalBadgeNum) + 1);
	}

	function videoBadges() {
		var totalBadgeNum = totalBadge.text();
		var videoBadgeNum = videoBadge.text();
		videoBadge.show();
		videoBadge.text(Number(videoBadgeNum) + 1);
 		totalBadge.text(Number(totalBadgeNum) + 1);
	}

	function folders() {
		
		$('.images .all-data-files').each(function(i) {
			var count = i;
			totalCountOfFiles = i + 1;
			imageFiles.text(i + 1);
		});

	
		$('.audio .all-data-files').each(function(i) {
			var count = i;
			audioFiles.text(i + 1);
		
		});


		$('.video .all-data-files').each(function(i) {
			var count = i;
			videoFiles.text(i + 1);
		});

		totalCountOfFiles = Number(imageFiles.text()) + Number(audioFiles.text()) + Number(videoFiles.text());
		totalFiles.text(totalCountOfFiles);
		console.log(totalCountOfFiles);

	}



	download.on('click', function() {
		downloadsCount++;
		downloads.text(downloadsCount);
	});


	navIcons.on('click', function() {
		event.preventDefault();
		count = 0;
		switchCircle.css({'left': '0px'});
		switchBtn.css({'background': 'red'});
		lockIcon.removeClass('active-overview-icon');
		menusAndNavagation();

		itemsSelected4Delete.each(function() {
			$(this).removeClass('active-file');
		});

		itemsSelected4Delete.each(function () {
			$(this).text('');
		});


		navIcons.each(function(i) {
			if ($(this).hasClass('active-nav-icon')) {
				overviewDropDown.eq(i).addClass('hide');
				$(this).removeClass('active-nav-icon');

			} else {	

			}
		});

		$(this).addClass('active-nav-icon');

		navIcons.each(function(i) {
			if ($(this).hasClass('active-nav-icon')) {
				overviewDropDown.eq(i).removeClass('hide');
			}
		});

		dataFiles.each(function() {
			if ($(this).hasClass('active-file')) {
				$(this).removeClass('active-file');
			}
		});
	});
	

	filterIcons.on('click', function(event) {
		event.preventDefault();

		$(this).toggleClass('active-nav-icon-filter');
		
		filterIcons.each(function(i) {
			if (!$(this).hasClass('active-nav-icon-filter')) {
				containers.eq(i).addClass('hide');
				childFilterIcons.eq(i).addClass('line-through');
				
			} else {
				containers.eq(i).removeClass('hide');
				childFilterIcons.eq(i).removeClass('line-through');
			}
		});

	});

	nav.css({'height': section});
	switchButton.on('click', function (event) {
		
		
		navIcons.each(function(i) {

			if($(this).hasClass('active-nav-icon')) {
				
				if (overviewDropDown.eq(i).is(':hidden')) {
					overviewDropDown.eq(i).slideDown();
					switchCircle.css({'left': '62px'});
					switchBtn.css({'background': '#47CB8F'});
				} else  {
					switchCircle.css({'left': '0px'});
					overviewDropDown.eq(i).slideUp();
					switchBtn.css({'background': 'red'});
				}
			}

		});

	});

	navbarButton.on('click', function() {
		if (nav.hasClass('nav')) {
			icons.slideUp();
			unlock.fadeOut();
			nav.removeClass('nav');
			nav.stop().animate(
				{
					left: '-220px'
				},
				500,
				function() {
					lock.fadeIn();
				}
			);

		} else {
			lock.fadeOut(300);
			nav.stop().animate(
				{
					left: '0px'
				}, 
				500,
				function() {
					icons.slideDown(500,
						function() {
							nav.addClass('nav');
							
						}
					);
				}
			);
			unlock.fadeIn(1000);
		}
	});


	$(window).on('resize', function() {
		section = $('.section').outerHeight();
		nav.css({'height': section});
		var windowWidth = window.innerWidth;
		menusAndNavagation(windowWidth);	


	});


	function menusAndNavagation(windowWidth) {
		if (this.innerWidth <= 796 || windowWidth <= 796) {
			lock.show();
			unlock.hide();
			greenBox.show();
			icons.hide();
			nav.removeClass('nav');
			nav.stop().animate(
				{
					left: '-220px'
				}

			);
		} else if (this.innerWidth >= 796) {
			greenBox.hide();
			icons.show();
			nav.addClass('nav');
			nav.stop().animate(
			{
				left: '0'
			}

			);

		}

		if (this.innerWidth <= 571 || windowWidth <= 571) {
			switchCircle.css({'left': '0px'});
			switchBtn.css({'background': 'red'});
			overviewDropDown.hide();
			switchButton.show();
		} else {
			overviewDropDown.show();
			switchButton.hide();	
		}
	};




	numLikes.each(function() {
		numberOfLikes = Number($(this).text());
		totalNuMOfLikes = totalNuMOfLikes + numberOfLikes;
		liked.text(totalNuMOfLikes);
	});


	thumbsUp.on('click', function() { // adds likes to image only 1 time allowed
		var likesNumber = Number($(this).prev().children().children().next().text());
		var likes = $(this).prev().children().children().next();
		var thumbnailParent = $(this).parent().parent();
		var favoritesNum;
	
		if (!$(this).hasClass('liked')) {
			$(this).addClass('liked');
			likes.text(likesNumber + 1);
			totalNuMOfLikes = totalNuMOfLikes + 1;
			favoritesNum = Number(favorites.eq(0).text()) + 1;
			$(this).children().css({'text-shadow': '2px 2px 2px red'});
			$(this).css({'opacity': '1'});
			thumbnailParent.css({'background': 'lightgrey'});
		} else {
			$(this).removeClass('liked');
			likes.text(likesNumber - 1);
			totalNuMOfLikes = totalNuMOfLikes - 1;
			favoritesNum = Number(favorites.eq(0).text()) - 1;
			$(this).children().css({'text-shadow': 'none'});
			$(this).css({'opacity': '.6'});
			thumbnailParent.css({'background': 'white'});

		}

		favorites.text(favoritesNum);
		liked.text(totalNuMOfLikes);
		numberOfLikes = 0;
		favoritesNum = 0;

	});

	deleteBtn.on('click', function() {
		
		$('.all-data-files').each(function() {
	
			if ($(this).hasClass('active-file') && !($(this).hasClass('lock-red'))) {
				$(this).parent().remove();
				itemsSelected4Delete.text('');

				if ($(this).children().children().hasClass('liked')) {
					var liked1 = liked.text() - 1;
					liked.text(liked1);
					totalNuMOfLikes = totalNuMOfLikes - 1;
					totalNumOfFavorites = Number(favorites.text()) - 1;
					favorites.text(totalNumOfFavorites);
				} else if ($(this).children().children().hasClass('new') && $(this).children().children().is(':visible')) {
					
					if ($(this).children().hasClass('img-caption')) {
						var imageBadgeNum = imageBadge.text();
						var totalBadgeNum = totalBadge.text();
						imageBadge.text(Number(imageBadgeNum) - 1);
 						totalBadge.text(Number(totalBadgeNum) - 1);
					} else if ($(this).children().hasClass('audio-caption')) {
						var audioBadgeNum = audioBadge.text();
						var totalBadgeNum = totalBadge.text();
						audioBadge.text(Number(audioBadgeNum) - 1);
 						totalBadge.text(Number(totalBadgeNum) - 1);
					} else {
						var videoBadgeNum = videoBadge.text();
						var totalBadgeNum = totalBadge.text();
						videoBadge.text(Number(videoBadgeNum) - 1);
 						totalBadge.text(Number(totalBadgeNum) - 1);
					}
				}
			}
		});
		totalNuMOfDeletes = totalNuMOfDeletes + count;
		deletedCount.text(totalNuMOfDeletes);
		folders();
	});


	overviewIcons.on('click', function() { // just the icon that was clicked
		var icon = $(this);
		count = 0;

		if ($(this).hasClass('active-overview-icon') || $(this).hasClass('active-overview-icon-delete')) {
			$(this).removeClass('active-overview-icon active-overview-icon-delete');
			trashCanReady = false;
			fileName[0].innerHTML = '';
			fileSize[0].innerHTML = '';
			messageSuccess.className = 'hide';
			messageError.className = 'hide';
			dataFiles.removeClass('active-file');
			lockFiles.addClass('hide');
			addFolder.addClass('hide')
			itemsCounter.addClass('hide');
			deleteBtn.addClass('hide')
			itemsSelected4Delete.text('');
			upload.addClass('hide');
			icon.removeClass('active-overview-icon');
		} else {
			trashCanReady = false;
			fileName[0].innerHTML = '';
			fileSize[0].innerHTML = '';
			messageSuccess.className = 'hide';
			messageError.className = 'hide';
			lockFiles.addClass('hide');
			addFolder.addClass('hide');
			itemsCounter.addClass('hide');
			deleteBtn.addClass('hide');
			upload.addClass('hide');
			icon.removeClass('active-overview-icon');
			dataFiles.removeClass('active-file');
			itemsSelected4Delete.text('');
			checksCurrentOverview(icon);
		}
	});


	$(document).on('click', '.all-data-files', function(event) { // deletes clicked items if  trashCanReady is true
		var itemscounted = Number(itemsSelected4Delete.text());
		
		if (trashCanReady & navIcons.eq(0).hasClass('active-nav-icon')) {
			$(this).toggleClass('active-file');

			if($(this).hasClass('active-file') && !($(this).hasClass('lock-red'))) {
				itemsSelected4Delete.text(itemscounted + 1);
				count = count + 1;
			} else if ($(this).not('.active-file') && !($(this).hasClass('lock-red'))) {
				itemsSelected4Delete.text(itemscounted - 1);
				count = count - 1;
			}

		}
		

	});


	function checksCurrentOverview(icon) {
		
		overviewIcons.each(function() {
			if ($(this).hasClass('active-overview-icon') || $(this).hasClass('active-overview-icon-delete')) {
				$(this).removeClass('active-overview-icon active-overview-icon-delete');
			}
		});

		if (icon.hasClass('delete')) {
			icon.addClass('active-overview-icon-delete');
			trashCanReady = true;
			itemsCounter.removeClass('hide');
			deleteBtn.removeClass('hide');
		} else if (icon.hasClass('add')) {
			upload.removeClass('hide');
			icon.addClass('active-overview-icon');
		} else if (icon.hasClass('lock-icon')) {
			lockFiles.removeClass('hide');
			icon.addClass('active-overview-icon');
		} else if (icon.hasClass('folder-icon')) {
			addFolder.removeClass('hide');
			icon.addClass('active-overview-icon');
		} else {
			icon.addClass('active-overview-icon');
			itemsSelected4Delete.text('');
		}
	
	};

	window.onload = function() {

		var fileInput = document.getElementById('file');
		var images = document.getElementsByClassName('images');
		var sound = document.getElementsByClassName('audio');
		var video = document.getElementsByClassName('video');
		var write = document.getElementsByClassName('write');
		var insideRow = document.getElementsByClassName('inside-row');
		var recentlyAdded = document.getElementsByClassName('recently-added');
		var imageBadge = document.getElementsByClassName('image-badge');
		var audioBadge = document.getElementsByClassName('audio-badge');
		var videoBadge = document.getElementsByClassName('video-badge');
		var totalBadge = document.getElementsByClassName('total-badge');
		var totalBadgeNum = totalBadge[0].textContent;
		var imageBadgeNum = imageBadge[0].textContent;
		var audioBadgeNum = audioBadge[0].textContent;
		var videoBageNum = videoBadge[0].textContent;


		fileInput.addEventListener('change', function(e) {
			var fileName = document.getElementsByClassName('file-name');
			var fileSize = document.getElementsByClassName('file-size');
			var file = fileInput.files[0];
			var imageType = /image.*/;
			var audioType = /audio.*/;
			var videoType = /video.*/;
			var name = file.name;
			var size = file.size;

			fileName[0].innerHTML = name;
			fileSize[0].innerHTML = size;


			if (file.type.match(imageType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					var addedFiles = document.getElementsByClassName('added-files');
					var img = new Image();
					img.src = reader.result;
					var index = addedFiles.length;

   					if (index % 2 == 0) {
   						var tag = document.createElement('div');

						tag.className = 'row inside-row';
  						tag.innerHTML = '<div class="col-sm-6 added-files">' +
    					'<div class="thumbnail all-data-files realitive delete">' +
      						'<img src=' + img.src + ' alt="...">' +
      						'<div class="caption img-caption">' +
       				 			'<p>' + name + '</p>' +
       				 			'<div class="likes">' +
       				 				'<span><i class="fa fa-heart" aria-hidden="true"></i> <strong class="num-likes">0</strong></span>' +
       				 			'</div>' +
       				 			'<div class="thumbsup">' +
									'<i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>' +
       				 			'</div>' +
       				 			'<div class="download">' +
       				 				'<a href="img/pic16.jpg" download><i class="fa fa-download" aria-hidden="true"></i></a>' +
       				 			'</div>' +
       				 			'<button type="button" class="new btn btn-default">New!</button>' +
      						'</div>' +
    						'</div>';
    		
      					images[0].appendChild(tag);
      					recentlyAdded[0].textContent = number + 1;
      					number++;
      					imageBadges();
      					folders();
      				
   					} else {
      					
      					var tag = document.createElement('div');

						tag.className = 'col-sm-6 added-files';
  						tag.innerHTML = '<div class="thumbnail all-data-files realitive delete">' +
      						'<img src=' + img.src + ' alt="...">' +
      						'<div class="caption img-caption">' +
       				 			'<p>' + name +'</p>' +
       				 			'<div class="likes">' +
       				 				'<span><i class="fa fa-heart" aria-hidden="true"></i> <strong class="num-likes">0</strong></span>' +
       				 			'</div>' +
       				 			'<div class="thumbsup">' +
									'<i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>' +
       				 			'</div>' +
       				 			'<div class="download">' +
       				 				'<a href="img/pic16.jpg" download><i class="fa fa-download" aria-hidden="true"></i></a>' +
       				 			'</div>' +
       				 			'<button type="button" class="new btn btn-default">New!</button>' +
      						'</div>' +
    						'</div>';

    					insideRow[insideRowLength].appendChild(tag);
    					insideRowLength++;
    					recentlyAdded[0].textContent = number + 1;
    					number++;
 						imageBadges();
 						folders();
  					}
					
  				
  					
				}

				reader.readAsDataURL(file);	
				messageSuccess.removeAttribute('class', 'hide');
				messageError.setAttribute('class', 'hide');
			
			} else if (file.type.match(audioType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					var addedFiles = document.getElementsByClassName('added-files');
					var audio = new Audio();
					audio.src = reader.result;
					var tag = document.createElement('div');

						tag.className = 'row';
  						tag.innerHTML = '<div class="col-sm-12 added-files">' +
    					'<div class="thumbnail all-data-files realitive delete audio-height">' +
                  		'<div class="audio">' + 
                    	'<audio controls>' +
                      	'<source src=' + audio.src + 'type="audio/mpeg">' +    
                   		'</audio>' +
                  		'</div>' +
      						'<div class="caption audio-caption">' +
       				 			'<p>' + name + '</p>' +
       				 			'<div class="likes">' +
       				 				'<span><i class="fa fa-heart" aria-hidden="true"></i> <strong class="num-likes">13</strong></span>' +
       				 			'</div>' +
       				 			'<div class="thumbsup">' +
									    '<i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>' +
       				 			'</div>' +
       				 			'<div class="download">' +
       				 				'<a href="audio/20161115-111025.mp3" download><i class="fa fa-download" aria-hidden="true"></i></a>' +
       				 			'</div>' +
       				 			'<button type="button" class="new btn btn-default">New!</button>' +
      						'</div>' +
    					'</div>';	

  					sound[0].appendChild(tag);
  					recentlyAdded[0].textContent = number + 1;
  					number++;
  					audioBadges();
  					folders();
   					
				}

				reader.readAsDataURL(file);	
				messageSuccess.removeAttribute('class', 'hide');
				messageError.setAttribute('class', 'hide');


			} /*else if (true) {
				var reader = new FileReader();

				reader.onload = function(e) {
					var addedFiles = document.getElementsByClassName('added-files');
					//var movie = new Video();
					//movie.src = reader.result;
					var tag = document.createElement('div');

						tag.className = 'row';
  						tag.innerHTML = '<div class="col-sm-12 added-files">' +
    					'<div class="thumbnail all-data-files realitive delete audio-height">' +
                  		'<div class="video">' + 
                    	'<video controls>' +
                      	'<source src=' + reader.result + ' type="video/mp4">' +    
                   		'</video>' +
                  		'</div>' +
      						'<div class="caption video-caption">' +
       				 			'<p>' + name + '</p>' +
       				 			'<div class="likes">' +
       				 				'<span><i class="fa fa-heart" aria-hidden="true"></i> <strong class="num-likes">13</strong></span>' +
       				 			'</div>' +
       				 			'<div class="thumbsup">' +
									     '<i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>' +
       				 			'</div>' +
       				 			'<div class="download">' +
       				 				'<a href="audio/20161115-111025.mp3" download><i class="fa fa-download" aria-hidden="true"></i></a>' +
       				 			'</div>' +
       				 			'<button type="button" class="new btn btn-default">New!</button>' +
      						'</div>' +
    					'</div>';	
  					video[0].appendChild(tag);
  					videoBadges();
  					folders();
   				
				}

				reader.readAsDataURL(file);	
				messageSuccess.removeAttribute('class', 'hide');
				messageError.setAttribute('class', 'hide');

			}*/ else {
				messageError.removeAttribute('class', 'hide');
				messageSuccess.setAttribute('class', 'hide');
			}

		});

	}
});







