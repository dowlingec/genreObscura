GENRE OBSCURA
Fun genre generating tool for when the drummer asks "wait... what even are we?" at practice
Also a place for people to share their bands, (or find new music)
Returns a random genre requested from https://binaryjazz.us/genrenator-api/
I will also be using https://picsum.photos/ API to add a random background image for an inspirational quotes style format every time the "genrenate" button is clicked
-Client can thumbs up/down their genre result
-Client can leave a bandname, link and brief description alongside the ridiculous genre they received, so people can really get a feel for what 'shoehorn shuffle' (or whatever) really sounds like
And question, as any client input data does not have to persist does this mean we only have to do a GET request?

JS
take current genTxt content and set value of genre form with it
genTxt >>> aName.value.innerText = genTxt
fetch image and replace post it

CSS
button formatting
set bg image for div, to help them float together properly
second handwriting font for bulletin board