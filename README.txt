This project was originally inspired by this youtube video:

https://www.youtube.com/watch?v=chWRcWmxH28&t=270s

Their code is available here:
https://pastebin.com/D2WASyZw

I've recycled some of the functions but I had to create new ones to suit my own purposes. General purpose functions such as dealing with radians and vectors were found searching on Google.

You need to make sure to give values to every stat when creating a new dot because otherwise they will be undefined and cause things to break.

If you want to hide the unused team counters, remove zeroes from pplCounter. This isn't the best way to start the counters but if I didn't put values in the array, ++ wouldn't work so they have to start from 0.