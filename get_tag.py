#The following is the minimum code for running any of the three options. You pass the name of the option (get_tags, update_tags or rename) and the starting directory.
#!/usr/bin/python
 
#import sys,os
 
#from os.path import join
 
#if __name__ == ‘__main__’:
 
#try:
 
#option = eval(sys.argv[1])
 
#if len(sys.argv) > 2:
 
#path = sys.argv[2]
 
#else:
 
#path = ‘.’
 
#option(path)
 
#except:
 
#print(“Parameters: one of [get_tags,update_tags,rename] path(default .)”)

#Creating the CSV file

#The basic code for get_tags is as follows. You iterate over the files and select each MP3 file. You will need to call the function get_file_tags to get the tags you need. This function is the one that will depend on the Python module you use. Two other versions are given later.
#def get_mp3_file(path):

#“”” Walk through all files and select mp3 files.

#Common for all options”””

#for root,dirnames,filenames in os.walk(path):

#for f in filenames:

#if len(f) > 4 and f[-4:].lower() == ‘.mp3’:

#yield join(root,f)

#def get_tags(path):

#“”” Create a dictionary with file name as the key

#and values are a tuple of the desired tag values

#Save the dictionary as csv file suitable for a spreadsheet”””

#result = {}

#for fn in get_mp3_file(path):

#result[fn]=get_file_tags(fn)

#out=open(‘mp3.csv’,’w’)

#for f in result:

#out.write(“%s;%s;%s;%s\n”%((f,) + result[f]))






from mutagen.mp3 import MP3

# If title is missing set it to the file name without the extension.

def get_file_tags(f):

mp3 = MP3(f)

try:

title=mp3['TIT2'][0]

except:

title=f.split('/')[-1][:-4]

try:

artist=mp3['TPE1'][0]

except:

artist="Unknown"

try:

rating=mp3['POPM:'].rating

except:

rating="0"

return (title, artist, rating)
