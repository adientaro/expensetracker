package com.expensetracker.expensetracker.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="category")
public class Category {
    @Id
    private Long id;
    @NotNull
    private String name;

}
