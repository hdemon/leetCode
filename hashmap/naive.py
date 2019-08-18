import hashlib

dat = 'python' 

# MD5のハッシュ値
hs = hashlib.md5(dat.encode()).hexdigest()
print(hs)

