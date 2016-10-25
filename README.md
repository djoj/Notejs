# Notejs

The premier note taking and note sharing app for developers. Check it out out [notesjs.herokuapp.com](notesjs.herokuapp.com)

## API:
### Getting Started:
All data can be accessed from the https://notesjs.herokuapp.com/api/. All data is sent and received as JSON.

- Run 'npm install'
- Run 'npm run dev'
- Run 'npm start'.
- Go to localhost:8000.

### Requests:
Example API request

  ```javascript
  $.ajax({
    url: '/api/signup',
    data: {
      firstName: "Joe",
      lastName: "Bones",
      email: "exampleEmail@gmail.com",
      password: "password123"
    },
    success: function (response) {
      console.log("Successful signup!")
    },
    dataType: 'JSON'
  });
  ```

#### Users:
| Request | Endpoint              | Description                           | Required data                                    |
| ------- |:---------------------:| :-------------------------------------|:-------------------------------------------------|
| POST    | /api/users/login      | Login a user to the application       | Required: email (String), password (String)      |
| GET     | /api/users/logout     | Sign out a user                       | Required: None                                   |
| POST    | /api/users/signup     | Post a new user to the database.      | Required: First name, Last name, Email, Password |
| DELETE  | /api/users/delete     | Remove a user from the database.      | Required: userId (Num)                           |

#### Notes:
| Request | Endpoint              | Description                           | Required data                                    |
| ------- |:---------------------:| :-------------------------------------|:-------------------------------------------------|
| POST    | /api/notes            | Add note to user's list of notes      | Required: noteName, content, folderId (Num)      |
| PUT     | /api/notes/:noteId    | Update a specific note                | Required: noteId (Num), content (String)         |
| GET     | /api/notes/:noteId    | Get specific note data                | Required: None                                   |
| DELETE  | /api/notes/:noteId    | Delete note from user's note list     | Required: noteId (Num)                           |

#### Folders:
| Request | Endpoint               | Description                           | Required data                                    |
| ------- |:----------------------:| :-------------------------------------|:-------------------------------------------------|
| POST    | /api/folders           | Get a list of all user's folders      | Required: folderName (String), userId (Num)      |
| DELETE  | /api/folders           | Delete a specific folder              | Required: folderId (Num)                         |
| GET     | /api/folders/:userId   | Get a list of all user's folders      | Required: userId (Num)                           |
| GET     | /api/folders/:folderId | Get one folder with all notes         | Required: FolderId (Num)                         |
| PUT     | /api/folders/:folderId | Rename a folder                       | Required: folderId (Num), newName (String)       |

### Errors:
Sometimes your API call will generate an error. Every response to an API call that generates an error will include an error code, the reason for the error, and an error message to help you debug your request.

| Code  | Response Text   | Description                                                                                      |
| ----- |:---------------:| :------------------------------------------------------------------------------------------------|
| 400   | Bad Request     |                                                                                                  |
| 401   | Unauthorized    | You do not have authorization to make the request.                                               |
| 403   | Forbidden       |                                                                                                  |
| 404   | Not Found       | The resource you tried to locate could not be found or does not exist.                           |
| 500   | Server Error    | An error occurred on our server. You may also get this by sending wrong data in a request.       |


## Team:
- [Michel Mitrakos](https://www.michaelmitrakos.com) - Scrum Master & Software Engineer
- [Mike Yang](https://github.com/micyang) - Product Lead & Software Engineer
- [David Kim](https://github.com/davidkim310) - Software Engineer
- [Chris Phan](https://github.com/cpp6d) - Software Engineer

## Built With:
| Front-End      | Back-End     | Modules         | Testing Frameworks  |
| -------------- |:------------:| :---------------|:--------------------|
| React          | Node JS      | Babel           | Mocha               |
| Redux          | Express      | BodyParser      | Chai                |
| Webpack        | Postgres     | Morgan          |                     |
| React Material | Sequelize    |                 |                     |

## Future Features
- Profile page
- Track sessions and implement single user mode
- Delete folders
- Key binding for commands in note view (aka Cmd A for code)
- Ability to tab in notes!
- Allow for loading of specific note URLs
- Organizations
- Sign out functionality (front-end)
- Change folder name functionality (front-end)
- Note ownership
- In-note chat
- In-note change tracking
- Name tagging
- Code color scheme
- Real-time collaborative editing
- Payments for donations
- About page
- Github authentication
- Facebook authentication
- Night mode
- Back button on each page
- Export to PDF
- Add word previews of each note in folder view
