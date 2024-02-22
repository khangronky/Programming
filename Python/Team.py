import os
import random
while True:
	os.system("cls")
	players = ["Martin", "Craig", "Sue", "Claire", "Dave",
	"Alice" ,"Luciana", "Harry", "Jack", "Rose",
	"Lexi", "Maria", "Thomas", "James", "William",
	"Ada", "Grace", "Jean", "Marissa", "Alan"]
	team = []
	print("Welcome to Team Allocator!")
	n = int(input("Type the number of teams: "))
	random.shuffle(players)
	for i in range(0, n):
		team.append(players[len(players) // n * i: len(players) // n * (i + 1)])
		print("Team " + str(i + 1) + ":", end = " ")
		for j in range(0, len(team[i])):
			if j == 0:
				print(team[i][j] + "(C)", end = ", ")
			else:
				if j == len(team[i]) - 1:
					print(team[i][j])
				else:
					print(team[i][j], end = ", ")
	response = input("\nPick teams again? Type y or n: ")
	if response == "n":
		os.system("cls")
		break