Need to implement to upload file helper and deploy on cloud env, either amazon or bluemix.


/**************
***version 1.0 ***
**************/
1. browser file located on client and select file
2. upload to server 
3. show progress during uploading
4. list your file name on page.
5. could be delete files uploaded.


requirement No.1: browser file located on client and select file

1. click browser button 
2. select a single file ready for upload and click OK button
3. filename should be present on page.

	Function 1: 
		    #1 <input type="file">
		    #2 node js module.
	Function 2: add-in included
	Function 3: 
		   #1use val() (jQuery) 
		   #2 refer to event handle to set name for page.


App Server:
	handle request 
		request.GET:
			show message:
				what: file list/ <ul> or <li>.
				how: index.html
				when: handle get request.
				who: client send url request.
		request.POST:
			add file ready to upload:
				what: request.method == post
				how: parse(request)
				when: handle event
				who: app.js tracker listener
			
	return response

Client JS:
Server JS:

Server JS: