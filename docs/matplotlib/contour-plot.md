---
title: Contour plot
---
```python
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline
plt.rcParams["figure.dpi"]=150
plt.rcParams["figure.facecolor"]="white"

x = np.linspace(0, 5, 100)
y = np.linspace(0, 5, 100)
X,Y = np.meshgrid(x, y)

# Define some function
Z = np.sin(X) ** 2 + np.cos(5 + X * Y)

plt.contour(X, Y, Z)
plt.show()
```

![contour-plot](/img/contour-plot-1.png)

```python
plt.contour(X, Y, Z, 10, cmap='RdGy')
plt.show()
```

![contour-plot](/img/contour-plot-2.png)

```python
plt.contourf(X, Y, Z, 20, cmap='RdGy')
plt.colorbar()
plt.show()
```

![contour-plot](/img/contour-plot-3.png)
