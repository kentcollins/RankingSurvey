// options to be ranked.  Will appear in this order when unranked.
const options = [
"Apple", 
"Banana", 
"Cherry", 
"Date", 
"Elderberry", 
"Fig", 
"Grape", 
"Honeydew", 
"Jackfruit", 
"Kiwi", 
"Lemon", 
"Mango", 
"Nectarine", 
"Orange", 
"Papaya", 
"Quince", 
"Raspberry", 
"Strawberry", 
"Tangerine", 
"Watermelon"
];

// the number of selections required to activate the submission button
const REQUIRED_RANKED_ITEMS = 5;

// a pre-existing Google form.  The ID is part of the form URL
// https://docs.google.com/forms/d/e/THISISTHEFORMIDHERE/
const FORM_ID = "THISISTHEFORMIDHERE"

// the question entry id from the form
// you can extract this from the "get a prefilled link" menu option
// https://docs.google.com/forms/d/e/THISISTHEFORMIDHERE/viewform?usp=pp_url&entry.idnumberhere=default+value
const ENTRY_ID = "entry.idnumberhere"