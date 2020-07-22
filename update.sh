dpkg-scanpackages ./debs > Packages
rm Packages.bz2
rm Packages.gz
cp Packages Packages_
cp Packages Packages__
bzip2 Packages
mv Packages_ Packages
gzip Packages
mv Packages__ Packages

