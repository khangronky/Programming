while True:
	n = int(input("Type the index of the Fibonacci series you want to find: "))
	if n <= 0: print("The index you type must be a positive integer, please try again\n")
	else: break
if n == 1: c = 1
if n == 2: c = 1
else:
	a = 1
	b = 1
	for i in range(3, n + 1):
		c = a + b
		a = b
		b = c
print(f"The index of {n} of the Fibonacci series is the number {c}")