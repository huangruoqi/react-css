import os
n = len([name for name in os.listdir('.') if os.path.isfile(name)])
f = open('index.js','w')
for i in range(1, n-1):
  f.write('import a{} from "./{}"\n'.format(i,i))
f.write('\nexport default { ')  
for i in range(1, n-1):
  f.write(f'a{i}, ')
f.write('}')
f.close()
print("Updated!")
