package com.expensetracker.expensetracker.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Data
@Table(name="USERS")
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
}
