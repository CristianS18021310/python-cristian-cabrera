#list

adnseq  = ["A", "C", "T", "G", "A", "T", "G", "T", "A", "C"]
adnseq2 = ["T", "G", "A", "T", "G"]

n = len(adnseq) # longitud de adnseq
#print adnseq
#print "lengt = " ,n
#print "first position = " ,adnseq[0]
#print "last position = " ,adnseq[n-1]
#print "first 3 positions = " ,adnseq[0:3]
#print "last 5 positions  = " ,adnseq[-5:]

#print "inserting one item"
adnseq.append("T")
n = len(adnseq)

#print "adnseq = ", n

#print "replace first position whith T"
adnseq[0] = "T"
#print adnseq

#print "delete last position"
adnseq.pop(n-1)
#print adnseq

newadnseq = adnseq + adnseq2
print adnseq
print adnseq2
print newadnseq
print " length = ", len(newadnseq)

