@echo off

echo �����Dos���������ʾϵͳ��Ϣ��Ӳ����Ϣ��bat����

:start

cls

color 0a

echo.

echo ===============================

echo ѡ����ʾϵͳ��Ϣ��Ӳ����Ϣ�ķ�ʽ

echo ===============================

echo.

echo 1. cmd���ڲ鿴

echo.

echo 2. ���򴰿ڲ鿴

echo.

echo 3. �ı��鿴

echo.

echo 4. �˳�

echo.

if exist "%SystemRoot%System32choice.exe" goto Win7Choice

set /p choice=���������ֲ����س���ȷ��:

echo.

if %choice%==1 goto cmd1

if %choice%==2 goto pro

if %choice%==3 goto txt

if %choice%==4 goto end

cls

"set choice="

echo ����������������ѡ��

ping 127.0.1 -n "4">nul

goto start

:Win7Choice

choice /c 1234 /n /m "��������Ӧ���֣�"

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

echo �밴������˳���

@Pause>nul

�ֿ���������鿴��

����1. cmd���ڲ鿴:

@echo off

systeminfo

dxdiag /dontskip /whql:off /t systeminfo1.txt&&more systeminfo1.txt

pause

����2. ���򴰿ڲ鿴:

@echo off

msinfo32

dxdiag

pause

����3. �ı��鿴:

@echo off

systeminfo>systeminfo.txt&&start notepad systeminfo.txt

dxdiag /dontskip /whql:off /t systeminfo1.txt&?epad systeminfo1.txt

pause