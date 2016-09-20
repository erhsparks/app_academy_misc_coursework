class Employee
  attr_reader :salary, :name, :title, :boss

  def initialize(name, title, salary, boss = nil)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier = 1)
    @salary * multiplier
  end

end

class Manager < Employee
  attr_reader :employees

  def initialize(name, title, salary, boss = nil, employees = [])
    @employees = employees
    super(name, title, salary, boss)
  end

  def bonus(multiplier = 1)
    employees_salary = @employees.inject(0) do |sum, employee|
      sum + employee.salary
    end
    employees_salary * multiplier
  end

end

if __FILE__ == $PROGRAM_NAME
  david = Employee.new("David", "TA", 10000, "Darren")
  shawna = Employee.new("Shawna", "TA", 12000, "Darren")
  darren = Manager.new("Darren", "TA Manager", 78000, "Ned", [david, shawna])
  ned = Manager.new("Ned", "Founder", 1_000_000, nil, [darren] + darren.employees)

  puts ned.bonus(5)
  puts darren.bonus(4)
  puts david.bonus(3)

end
