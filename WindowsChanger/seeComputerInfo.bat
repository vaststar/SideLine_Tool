@echo off

echo 计算机Dos命令，三种显示系统信息与硬件信息的bat代码

:start

cls

color 0a

echo.

echo ===============================

echo 选择显示系统信息与硬件信息的方式

echo ===============================

echo.

echo 1. cmd窗口查看

echo.

echo 2. 程序窗口查看

echo.

echo 3. 文本查看

echo.

echo 4. 退出

echo.

if exist "%SystemRoot%System32choice.exe" goto Win7Choice

set /p choice=请输入数字并按回车键确认:

echo.

if %choice%==1 goto cmd1

if %choice%==2 goto pro

if %choice%==3 goto txt

if %choice%==4 goto end

cls

"set choice="

echo 您输入有误，请重新选择。

ping 127.0.1 -n "4">nul

goto start

:Win7Choice

choice /c 1234 /n /m "请输入相应数字："

if errorlevel 4 goto end

if errorlevel 3 goto txt

if errorlevel 2 goto pro

if errorlevel 1 goto cmd1

cls

goto start

:cmd1

systeminfo

dxdiag /dontskip /whql:off /t systeminfo1.txt&&more systeminfo1.txt

goto end

:pro

msinfo32

dxdiag

goto end

:txt

systeminfo>systeminfo.txt&&start notepad systeminfo.txt

dxdiag /dontskip /whql:off /t systeminfo1.txt&?epad systeminfo1.txt

goto end

:end

echo 请按任意键退出。

@Pause>nul

分开的情况来查看：

方法1. cmd窗口查看:

@echo off

systeminfo

dxdiag /dontskip /whql:off /t systeminfo1.txt&&more systeminfo1.txt

pause

方法2. 程序窗口查看:

@echo off

msinfo32

dxdiag

pause

方法3. 文本查看:

@echo off

systeminfo>systeminfo.txt&&start notepad systeminfo.txt

dxdiag /dontskip /whql:off /t systeminfo1.txt&?epad systeminfo1.txt

pause