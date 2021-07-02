package com.expensetracker.expensetracker.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.Instant;

@Entity
@Data
@Table(name="EXPENSE")
@AllArgsConstructor
@NoArgsConstructor
public class Expense {
    @Id
    private Long id;
    private String description;
    private Instant expenseDate;
    @ManyToOne
    private Category category;
    @JsonIgnore
    @ManyToOne
    private User user;
}