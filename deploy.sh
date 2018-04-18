#!/bin/bash
scp ./* root@sam-watkinson.com:/var/www/tinydesigners/server; ssh root@sam-watkinson.com 'forever restart ~/masterhost/index.js'