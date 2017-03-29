## Example: `~/.bashrc` and `~/.zshrc`

```sh
# ...
# Here your configurations

export OCI_INCLUDE_DIR=/opt/instantclient/sdk/include/
export OCI_LIB_DIR=/opt/instantclient
export OCI_INC_DIR=/opt/instantclient/sdk/include/
export OCI_LIB_DIR=/opt/instantclient
export LD_LIBRARY_PATH=/opt/instantclient
```

After this you must restart the computer or execute the `source` command
```sh
$ source ~/.zshrc
# or
$ source ~/.bashrc
```
