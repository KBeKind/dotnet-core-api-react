using System;
using System.Collections.Generic;

namespace AspCoreWebReact.Server.Models;

public partial class Employee
{
    public string Id { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string City { get; set; } = null!;

    public string Department { get; set; } = null!;

    public string Gender { get; set; } = null!;
}
