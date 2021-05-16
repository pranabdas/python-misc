---
title: File read write
---
### Reading data from file
Being able to read data from files and write the data generated by your program
is an essential part of programming.

Here we will open a file named `xps-data.txt` which is stored in the `datafiles`
[directory](https://github.com/pranabdas/python-tutorial/).

Our data file contains two columns of numbers; energy and intensity. We can read
the data following way:
```python
# create two empty lists to store our energy and intensity values
energy = []
intensity = []

fid = open('../datafiles/xps-data.txt', 'r')
# read one line at a time
data = fid.readlines()
fid.close()

# number of lines we have
lines = len(data);
for lines in range(lines):
    data_row = data[lines]

    # remove the last newline character from each line
    data_row = data_row[:-1]

    # split in the tab character to separate energy and intensity strings
    data_row = data_row.split('\t')

    # store them in our energy and intensity variables as float
    energy.append(float(data_row[0]))
    intensity.append(float(data_row[1]))
```

Now that our data is stored in the energy and intensity variables. Best way to
visualize our data is to make a plot using matplotlib:
```python
import matplotlib.pyplot as plt
%matplotlib inline

plt.figure(figsize = (10, 8))
plt.plot(energy, intensity)
plt.xlabel('Kinetic energy (eV)')
plt.ylabel('Intensity (a.u.)')
plt.show()
```
![plot-two-col-data](../../static/img/plot-two-col-data.png)

### Writing data to file
Now that we are able to read data from a file, and use in our program, let us
try to generate and save some data.
```python
import numpy as np
x = np.linspace(-2*np.pi, 2*np.pi, num = 100)
y = (np.sin(x)/x)**2

plt.figure(figsize = (10, 8))
plt.plot(x, y)
plt.xlabel('x')
plt.ylabel('f(x)')
plt.show()
```
![func-plot](../../static/img/func-plot.png)

We can save the data as follows:
```python
fid = open('../datafiles/data.txt', 'w')

for index in range(len(x)):
    fid.write('{0}\t{1}\n'.format(x[index], y[index]))
fid.close()
```
We have stored our data in a file named `data.txt`.

### File I/O using numpy
`numpy` has a helpful library to read/write formatted data files. We can do
above tasks following way using `numpy`:
```python
# read from file
data = np.loadtxt("../datafiles/xps-data.txt")

# plot
plt.plot(data[:, 0], data[:, 1])
plt.xlabel('Kinetic energy (eV)')
plt.ylabel('Intensity (a.u.)')
plt.show()

# save to file
data = np.array([x, y]).T
np.savetxt("../datafiles/data.txt", data)
```