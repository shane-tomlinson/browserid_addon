#sessions Firefox addon

This is the sessions addon.  The purpose of this addon is to allow 
sites that support the sessions protocol to display the status of their session 
in the browser's URL bar.  This includes logging in, checking current status, 
changing accounts, and logging out.

##To run:
1. Get the addon-sdk at https://github.com/mozilla/addon-sdk/
2. Start up the addon-sdk environment by cd into the addon-sdk, then 'source 
   bin/activate'.
3. from the sessions directory, type cfx run.
4. Go to google.com, wikipedia.org, twitter.com or myfavoritebeer.com to see 
   the sessions in action.


##Running Tests:
Basic tests are found in the test directory. These can be run using 'cfx test'.

##Reporting bugs:

Bug reports can be filed using the "Issues" in GitHub under the browserid_addon repo.

##Author:
* Shane Tomlinson @ Mozilla Labs.
* stomlinson@mozilla.com
* @shane_tomlinson

##Licencing:
Tri licensed under any of the MPL, GPL, or LGPL.
