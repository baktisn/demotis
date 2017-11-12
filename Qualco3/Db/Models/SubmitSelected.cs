﻿using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Db.Models
{
    public class SubmitSelected
    {
        public IEnumerable<Bills> Bills { get; set; }
        public string BillsStr { get; set; }
        public decimal TotalAmount { get; set; }
   
        public int SettlementType { get; set; }
        public SelectList SettlementTypes { get; set; }

        public int MaxNoOfInstallments { get; set; }
        public SelectList Installments { get; set; }

        public decimal Interest { get; set; }
        public byte IsAccepted { get; set; }
        public decimal DownPayment { get; set; }

    }
}
