# Build command  : docker build -t pydev .
# Run docker     : docker run -ti -p 8888:8888 -v ${pwd}:/home pydev bash
# Launch jupyter : jupyter-notebook --ip 0.0.0.0 

# Start from Ubuntu 20.04 LTS
FROM ubuntu:focal

# Update OS
RUN apt update && apt upgrade -y

# Install software packages 
RUN apt install -y python3 python3-pip fonts-open-sans

# Install pip packages 
RUN pip3 install jupyterlab numpy scipy matplotlib pandas xlrd openpyxl \
seaborn scikit-learn missingno

# bashrc settings
RUN echo 'alias jupyter-notebook="jupyter-notebook --allow-root --no-browser"' \
>> $HOME/.bashrc

# matplotlib customizations
RUN mkdir -p /root/.config/matplotlib \
 && touch /root/.config/matplotlib/matplotlibrc \
 && echo 'font.family       : sans-serif' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'font.style        : normal' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'font.weight       : regular' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'font.sans-serif   : Open Sans, DejaVu Sans' >> /root/.config/matplotlib/matplotlibrc\
 && echo 'axes.linewidth    : 0.8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'axes.titlesize    : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'axes.labelsize    : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.major.size  : 8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.minor.size  : 4' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.major.width : 0.8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.minor.width : 0.6' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.labelsize   : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.direction   : in' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.major.size  : 8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.minor.size  : 4' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.major.width : 0.8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.minor.width : 0.6' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.labelsize   : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.direction   : in' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'image.origin      : lower' >> /root/.config/matplotlib/matplotlibrc

# leave in `/home` which we can map with the host
WORKDIR /home

