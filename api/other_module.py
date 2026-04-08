print("1. Loading other_module")

def greet():
    print("2. Hello from greet()")
    print("3. __name__ in other_module:", __name__)

print("4. Finished defining functions")

if __name__ == "__main__":
    print("5. Running other_module directly")
    greet()