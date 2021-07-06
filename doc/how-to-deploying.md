# Demo on how to deploy

```
% cd testdrive-rush

% rush deploy -p web3 --overwrite            # this produce a deploy folder at testdrive-rush/common/deploy

% cp -a ./common/deploy/ ~/Desktop/deploy/   # must copy with `-a` to preserver hard link, `copy -r` will not work.

% cd ~/Desktop/deploy/

% cd apps/web3

% pnpm build

% cd build/

% http-server
```




