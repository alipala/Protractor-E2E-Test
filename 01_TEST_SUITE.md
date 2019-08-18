# Application Under Test: The application 'Books' is an electronic library catalogue.

## TS01: Book names are displayed in the list.
	* TC01: Check number of books
	  ```diff
	  Expected Result: The number of books should equal 7
	  ```
## TS02: User can select book from the list: book details will be displayed as a separate card.
	* TC01: Select "desert solitaire" book and Read Title field
	  Expected Result: Title value should be "desert solitaire"
	* TC02: Read Author field
	  Expected Result: Author value should be 2
	* TC03: Read Publisher field
	  Expected Result: Publisher value should be "Berkley Books"
	* TC04: Read Year of publishing field
	  Expected Result: Year of publishing value should be 1913
## TS03: User can delete the book. The book will disappear from the list along with it's details.
	* TC01: Select "lolita" from the list to delete
	  Expected Result: The number of items should be 6
## TS04: User should be able to filter out the books by book name or part of book name. Filtration is case insensitive.
	* TC01: Type "infi" with lowercase
	  Expected Result: infinite jest book should be appear in in the list
	* TC02: Type "İnfi" with uppercase
	  Expected Result: Nothing to be seen in the list
## TS05: Filtration can be dropped by erasing the filter criteria.
	* TC01: Delete "infi" to see the dropped
	  Expected Result: After deleting filter criteria, all books should be seen in the list

## TS06: Book has the following fields: 'Title', 'Author', 'Publisher', 'Year of publishing'.
	* TC01: Select 'giovanni's room' from the list and Read "Title" field
	  Expected Result: Title value should be "giovanni's room"
	* TC02: Read "Author" field
	  Expected Result: Read value should be 1
	* TC03: Read "Publisher" field
	  Expected Result: Publisher value should be "Ablex Publishing"	
	* TC04: Read "Year of publishing" field
	  Expected Result: Year of publishing value should be 1969
## TS07: All those fields are mandatory.
## TS08: 'Title', 'Author', 'Publisher' fields can take any symbols as an input.
	* TC01: Select "if on a Winter's Night a Traveler" book from the list
	  Expected Result: Title value should be "if on a Winter's Night a Traveler"
	* TC02: Update Title field by adding with special characters at the end of the title
	  Expected Result: Title value should be "if on a Winter's Night a Traveler!'^+%&/()=?_-"
	* TC03: Update Author field by adding with special characters at the end of the title
	  Expected Result: Author value should be "2!'^+%&/()=?_-"
	* TC04: Update Publisher field by adding with special characters at the begnining of the title
	  Expected Result: Publisher value should be "!'^+%&/()=?_-Myriad Editions"
## TS09: 'Year of publishing' takes only numbers as an input.
	* TC01: Select first book from the list and update the "Year of publishing" field by using different characters than the numbers'
	  Expected Result: "Year of publishing" CSS color value should be rgba(244, 67, 54, 1)
## TS10: User can modify book properties and Save or Cancel the changes through appropriate buttons
	* TC01: Select "lolita" from list
	  Expected Result: Title value should ve "lolita"
	* TC02: Update Title field as "lolita_updated_version"
	  Expected Result: Title value should be lolita_updated_version
	* TC03: Update Author field as 3_updated_version
	  Expected Result: Author value 3_updated_version
	* TC04: Update "Publisher" field as Crocker & Brewster_updated_version
	  Expected Result: Publisher value should be "Crocker & Brewster_updated_version"
	* TC05: Update Year of publishing field as 2019
	  Expected Result: "Year of publishing" value should ve 2019

```diff
+ this text is highlighted in green
- this text is highlighted in red
```